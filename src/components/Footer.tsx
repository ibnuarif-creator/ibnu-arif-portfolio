import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          {profile.name}, {profile.credentials}
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
