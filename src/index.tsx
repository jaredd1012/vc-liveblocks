import {
  RoomProvider,
} from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import React, { useMemo } from "react";
import { AppShell, MantineProvider} from "@mantine/core";

import {
  Layer,
} from "./types";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { pineappleTheme } from "./themes";
import AppHeader from "./components/Layout/AppHeader";
import { AppLoader } from "./components/Loaders/AppLoader";
import { Canvas } from "./components/Board/Canvas";

export default function Room() {
  const roomId = useOverrideRoomId("nextjs-whiteboard-advanced");

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        selection: [],
        cursor: null,
        pencilDraft: null,
        penColor: null,
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <div className={styles.container}>
        <ClientSideSuspense fallback={<AppLoader />}>
          {() => <Layout />}
        </ClientSideSuspense>
      </div>
    </RoomProvider>
  );
}

function Layout() {
  const dirTheme = pineappleTheme;

  return (
    <MantineProvider theme={dirTheme}>
      <AppShell padding={0} header={{ height: 60 }}>
        <AppShell.Header>
          <AppHeader />
        </AppShell.Header>
        <AppShell.Main>
          <Canvas />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useOverrideRoomId(roomId: string) {
  const { query } = useRouter();
  const overrideRoomId = useMemo(() => {
    return query?.roomId ? `${roomId}-${query.roomId}` : roomId;
  }, [query, roomId]);

  return overrideRoomId;
}
