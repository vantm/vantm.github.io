import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren) {
  return (
    <>
      <main className="container mb-8">{props.children}</main>
      <footer className="container my-8">
        <div className="text-right tracking-tighter text-gray-800 dark:text-accent-foreground">
          App © 2024
        </div>
      </footer>
    </>
  );
}
