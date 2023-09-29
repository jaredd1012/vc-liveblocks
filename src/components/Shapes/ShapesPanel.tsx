import React from "react";
import RectangleButton from "../ToolsBar/RectangleButton";
import EllipseButton from "../ToolsBar/EllipseButton";
import { CanvasMode, LayerType, CanvasState } from "../../types";
import styles from "./index.module.css";
import TextButton from "../ToolsBar/TextButton";

type Props = {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
};

export default function ShapesPanel(
  { canvasState, setCanvasState  }: Props
) {
  return (
    <div className={styles.shapes_panel_container}>
      <div className={styles.tools_panel}>
        <div className={styles.tools_panel_section}>
          <RectangleButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Rectangle
            }
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Rectangle,
              })
            }
          />
          <EllipseButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Ellipse
            }
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Ellipse,
              })
            }
          />
          <TextButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Text
            }
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Text,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
