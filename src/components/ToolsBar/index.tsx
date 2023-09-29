import React, { useState } from "react";
import PencilButton from "./PencilButton";
import RectangleButton from "./RectangleButton";
import EllipseButton from "./EllipseButton";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
import SelectionButton from "./SelectionButton";
import { CanvasMode, LayerType, CanvasState } from "../../types";
import styles from "./index.module.css";
import ShapesPanel from "../Shapes/ShapesPanel";
import ImageButton from "./ImageButton";

type Props = {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

export default function ToolsBar(
  { canvasState, setCanvasState, undo, redo, canUndo, canRedo }: Props
) {
  const [showShapePanel, toggleShapePanel] = useState(false);

  return (
    <div className={styles.tools_panel_container}>
      <div className={styles.tools_panel}>
        <div className={styles.tools_panel_section}>
          <SelectionButton
            isActive={
              canvasState.mode === CanvasMode.None ||
              canvasState.mode === CanvasMode.Translating ||
              canvasState.mode === CanvasMode.SelectionNet ||
              canvasState.mode === CanvasMode.Pressing ||
              canvasState.mode === CanvasMode.Resizing
            }
            onClick={() => {setCanvasState({ mode: CanvasMode.None }); toggleShapePanel(false)}}
          />
          <PencilButton
            isActive={canvasState.mode === CanvasMode.Pencil}
            onClick={() => {setCanvasState({ mode: CanvasMode.Pencil }); toggleShapePanel(false)}}
          />
          <RectangleButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Rectangle
            }
            onClick={() =>
              toggleShapePanel(!showShapePanel)
            }
          />
          <ImageButton
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Icon
            }
            onClick={() => {
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Icon,
              });
              toggleShapePanel(false);
            }
              
            }
          />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.tools_panel_section}>
          <UndoButton onClick={undo} disabled={!canUndo} />
          <RedoButton onClick={redo} disabled={!canRedo} />
        </div>
      </div>
      {showShapePanel &&  <ShapesPanel canvasState={canvasState} setCanvasState={setCanvasState} />}
     
    </div>
  );
}
