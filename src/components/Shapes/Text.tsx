import { useState } from "react";
import { TextInput, rem } from '@mantine/core';
import { RectangleLayer, TextLayer } from "../../types";
import { colorToCss } from "../../utils";

type Props = {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

export default function Text(
  { layer, onPointerDown, id, selectionColor }: Props
) {

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Editable Text');

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: any) => {
    setText(e.target.textContent);
  };
  return (
  <>
  {isEditing ? (
        <foreignObject 
        x={layer.x}
        y={layer.y + 5}
        width={layer.width}
        height={layer.height}
        >
          <TextInput 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          style={{
            fontSize: `${layer.width * .1}px`,
            color: `${layer.fill ? colorToCss(layer.fill) : "#CCC"}`,
          
          }}
          />
        </foreignObject>
      ) : 
<text
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px)`,
      }}
      fontSize={layer.width * .15}
      x={layer.height /4}
      y={layer.height /2}
      width={layer.width}
      height={layer.height}
      fill={layer.fill ? colorToCss(layer.fill) : "#CCC"}
      onDoubleClick={handleDoubleClick}
    >{text}</text>
    }
  </>
  );
}
