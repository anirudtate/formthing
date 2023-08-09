export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-3">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by{" "}
        <a
          href="https://github.com/anirudtate"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          anirudtate
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/anirudtate/formthing"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
