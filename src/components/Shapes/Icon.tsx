import { useState } from "react";
import { IconLayer } from "../../types";
import { colorToCss } from "../../utils";

import logo from '../../assets/images/svg/cofund_logo.svg';

type Props = {
  id: string;
  layer: IconLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

export default function Icon(
  { layer, onPointerDown, id, selectionColor }: Props
) {
  const { x, y, width, height, fill } = layer;
  const [svgUrl, setSVGUrl] = useState('');

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const svgDataUrl = e?.target?.result;
        if(svgDataUrl) {
          setSVGUrl(svgDataUrl as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    {!svgUrl ?  
    
    <foreignObject 
    x={layer.x}
    y={layer.y}
    width={layer.width}
    height={layer.height}
    ><input type="file" accept=".svg,.jpg,.png" onChange={handleFileChange} /></foreignObject> :  
    <image
    onPointerDown={(e) => onPointerDown(e, id)}
    style={{
      transform: `translate(${x}px, ${y}px)`,
    }}
    x={0}
    y={0}
    width={width}
    height={height}
    href={svgUrl} 
    />}
    </>
   
  );
}
