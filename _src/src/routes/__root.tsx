import { Suspense, lazy } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { createDevTools } from "@redux-devtools/core";
import { LogMonitor } from "@redux-devtools/log-monitor";
import { DockMonitor } from "@redux-devtools/dock-monitor";
import { Layout } from "@/containers/layout";

export const ReduxDevtools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-k"
    changePositionKey="ctrl-q"
    defaultPosition="bottom"
    defaultIsVisible={true}
  >
    <LogMonitor theme="codeschool" />
  </DockMonitor>
);

const RouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : () => null;

const QueryDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-query-devtools").then((res) => ({
        default: res.ReactQueryDevtools,
      }))
    )
  : () => null;

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <ReduxDevtools />
      <Suspense>
        <QueryDevtools />
        <RouterDevtools
          position="bottom-right"
          containerElement="div"
          toggleButtonProps={{
            className: "!right-16 !bottom-5",
          }}
          closeButtonProps={{
            className: "!mr-16 !mb-4",
          }}
        />
      </Suspense>
    </>
  );
}
