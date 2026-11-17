import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { LogOut, Search, ShieldAlert, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { doctors, services } from "@/content/clinic";
import { bookingStatuses, type BookingStatus } from "@/lib/booking";
import {
  checkAdminAccess,
  deleteBooking,
  listBookings,
  updateBookingStatus,
  type AdminBooking,
} from "@/lib/booking.functions";
import { useLang } from "@/lib/i18n";
import { adminUi, timeSlots } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = "all" | BookingStatus;

const statusTone: Record<BookingStatus, string> = {
  pending: "bg-accent/15 text-accent-foreground",
  confirmed: "bg-primary/10 text-primary",
  cancelled: "bg-destructive/10 text-destructive",
  completed: "bg-secondary text-secondary-foreground",
};

export function AdminDashboard() {
  const { t } = useLang();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const check = useServerFn(checkAdminAccess);

  const access = useQuery({ queryKey: ["admin", "access"], queryFn: () => check(), retry: false });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  }

  if (access.isPending) {
    return <p className="py-24 text-center text-sm text-muted-foreground">{t(adminUi.checking)}</p>;
  }
  if (access.isError || !access.data.allowed) {
    return (
      <Container className="py-24">
        <div className="mx-auto max-w-md rounded-[2rem] border border-border bg-card p-8 text-center shadow-soft">
          <ShieldAlert className="mx-auto h-10 w-10 text-destructive" aria-hidden />
          <h1 className="mt-4 text-xl font-semibold text-foreground">
            {t(adminUi.forbiddenTitle)}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{t(adminUi.forbiddenDesc)}</p>
          <Button variant="outline" className="mt-6 rounded-full" onClick={signOut}>
            <LogOut className="h-4 w-4" aria-hidden />
            {t(adminUi.signOut)}
          </Button>
        </div>
      </Container>
    );
  }
  return <BookingsPanel onSignOut={signOut} />;
}

function useDebounced<T>(value: T, ms: number): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = window.setTimeout(() => setV(value), ms);
    return () => window.clearTimeout(id);
  }, [value, ms]);
  return v;
}

function BookingsPanel({ onSignOut }: { onSignOut: () => void }) {
  const { t, lang } = useLang();
  const queryClient = useQueryClient();
  const list = useServerFn(listBookings);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const q = useDebounced(search, 300);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const bookings = useQuery({
    queryKey: ["admin", "bookings", filter, q],
    queryFn: () => list({ data: { status: filter, q } }),
    placeholderData: (prev) => prev,
  });

  const selected = useMemo(
    () => bookings.data?.bookings.find((b) => b.id === selectedId) ?? null,
    [bookings.data, selectedId],
  );
  const refresh = () => queryClient.invalidateQueries({ queryKey: ["admin", "bookings"] });
  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === "ar" ? "ar-SY" : "en-GB", { dateStyle: "medium" }).format(
      new Date(iso.length === 10 ? `${iso}T00:00:00` : iso),
    );

  const counts = bookings.data?.counts;
  const cards: { key: "total" | BookingStatus; label: string }[] = [
    { key: "total", label: t(adminUi.total) },
    ...bookingStatuses.map((s) => ({ key: s, label: t(adminUi.status[s]) })),
  ];

  return (
    <Container className="py-12 sm:py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">{t(adminUi.dashboardTitle)}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t(adminUi.dashboardDesc)}</p>
        </div>
        <Button variant="outline" className="rounded-full" onClick={onSignOut}>
          <LogOut className="h-4 w-4" aria-hidden />
          {t(adminUi.signOut)}
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map((c) => (
          <div key={c.key} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="text-xs text-muted-foreground">{c.label}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {counts ? counts[c.key].toLocaleString(lang === "ar" ? "ar-SY" : "en-GB") : "–"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist">
          {(["all", ...bookingStatuses] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary",
              )}
            >
              {f === "all" ? t(adminUi.all) : t(adminUi.status[f])}
            </button>
          ))}
        </div>
        <label className="relative w-full lg:max-w-xs">
          <span className="sr-only">{t(adminUi.search)}</span>
          <Search
            className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={search}
            maxLength={60}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(adminUi.search)}
            className="w-full rounded-full border border-input bg-card py-2 pe-4 ps-9 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <div className="mt-6">
        {bookings.isPending ? (
          <p className="py-16 text-center text-sm text-muted-foreground">{t(adminUi.loading)}</p>
        ) : bookings.isError ? (
          <div className="py-16 text-center">
            <p className="text-sm text-destructive">{t(adminUi.loadError)}</p>
            <Button
              variant="outline"
              className="mt-4 rounded-full"
              onClick={() => bookings.refetch()}
            >
              {t(adminUi.retry)}
            </Button>
          </div>
        ) : bookings.data.bookings.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            {t(adminUi.empty)}
          </p>
        ) : (
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {bookings.data.bookings.map((b) => (
              <li key={b.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(b.id)}
                  className="grid w-full gap-2 px-5 py-4 text-start transition-colors hover:bg-secondary/50 md:grid-cols-[1.4fr_1.2fr_1.2fr_auto] md:items-center"
                >
                  <span>
                    <span className="block font-medium text-foreground">{b.fullName}</span>
                    <span className="block text-xs text-muted-foreground" dir="ltr">
                      {b.phone}
                    </span>
                  </span>
                  <span className="text-sm text-foreground">
                    {fmtDate(b.date)} · {slotLabel(b.time, t)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {serviceLabel(b.service, t)}
                  </span>
                  <StatusBadge status={b.status} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <BookingDetail
        booking={selected}
        onClose={() => setSelectedId(null)}
        onChanged={refresh}
        fmtDate={fmtDate}
      />
    </Container>
  );
}

type T = (pair: { ar: string; en: string }) => string;
const serviceLabel = (slug: string, t: T) => {
  const s = services.find((x) => x.slug === slug);
  return s ? t(s.title) : slug;
};
const doctorLabel = (slug: string | null, t: T) => {
  if (!slug) return t(adminUi.anyDoctor);
  const d = doctors.find((x) => x.slug === slug);
  return d ? t(d.name) : slug;
};
const slotLabel = (value: string, t: T) => {
  const s = timeSlots.find((x) => x.value === value);
  return s ? t(s.label) : value;
};

function StatusBadge({ status }: { status: BookingStatus }) {
  const { t } = useLang();
  return (
    <span
      className={cn(
        "inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium",
        statusTone[status],
      )}
    >
      {t(adminUi.status[status])}
    </span>
  );
}

function BookingDetail({
  booking,
  onClose,
  onChanged,
  fmtDate,
}: {
  booking: AdminBooking | null;
  onClose: () => void;
  onChanged: () => Promise<void>;
  fmtDate: (iso: string) => string;
}) {
  const { t, dir } = useLang();
  const update = useServerFn(updateBookingStatus);
  const remove = useServerFn(deleteBooking);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const statusMutation = useMutation({
    mutationFn: (status: BookingStatus) => update({ data: { id: booking!.id, status } }),
    onSuccess: async () => {
      await onChanged();
      toast.success(t(adminUi.statusSaved));
    },
    onError: () => toast.error(t(adminUi.statusError)),
  });
  const deleteMutation = useMutation({
    mutationFn: () => remove({ data: { id: booking!.id } }),
    onSuccess: async () => {
      setConfirmOpen(false);
      onClose();
      await onChanged();
      toast.success(t(adminUi.deleted));
    },
    onError: () => toast.error(t(adminUi.deleteError)),
  });

  const rows: [string, string, boolean?][] = booking
    ? [
        [t(adminUi.colWhen), `${fmtDate(booking.date)} · ${slotLabel(booking.time, t)}`],
        [t(adminUi.colService), serviceLabel(booking.service, t)],
        [t(adminUi.doctor), doctorLabel(booking.doctor, t)],
        [t(adminUi.phone), booking.phone, true],
        [t(adminUi.email), booking.email ?? t(adminUi.none), true],
        [t(adminUi.note), booking.note ?? t(adminUi.none)],
        [t(adminUi.language), booking.locale === "ar" ? "العربية" : "English"],
        [t(adminUi.colReceived), fmtDate(booking.createdAt)],
      ]
    : [];

  return (
    <>
      <Dialog open={booking !== null} onOpenChange={(o) => !o && onClose()}>
        <DialogContent dir={dir} className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {booking && (
            <>
              <DialogHeader>
                <DialogTitle className="text-start">{booking.fullName}</DialogTitle>
                <p className="text-start text-xs text-muted-foreground">{t(adminUi.details)}</p>
              </DialogHeader>
              <dl className="grid gap-3 text-sm">
                {rows.map(([k, v, ltr]) => (
                  <div key={k} className="grid grid-cols-[8rem_1fr] gap-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="break-words text-foreground" dir={ltr ? "ltr" : undefined}>
                      <span className={ltr ? "block text-start rtl:text-end" : undefined}>{v}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-2">
                <p className="text-sm font-medium text-foreground">{t(adminUi.changeStatus)}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {bookingStatuses.map((s) => (
                    <Button
                      key={s}
                      size="sm"
                      variant={booking.status === s ? "default" : "outline"}
                      className="rounded-full"
                      disabled={statusMutation.isPending || booking.status === s}
                      onClick={() => statusMutation.mutate(s)}
                    >
                      {t(adminUi.status[s])}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full border-destructive/40 text-destructive hover:bg-destructive/10"
                onClick={() => setConfirmOpen(true)}
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                {t(adminUi.delete)}
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent dir={dir}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-start">{t(adminUi.deleteTitle)}</AlertDialogTitle>
            <AlertDialogDescription className="text-start">
              {t(adminUi.deleteDesc)}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel disabled={deleteMutation.isPending}>
              {t(adminUi.cancel)}
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={deleteMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                deleteMutation.mutate();
              }}
            >
              {t(adminUi.delete)}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
