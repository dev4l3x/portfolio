import React, { useEffect } from "react";
import useResponsive, { SIZES } from "../hooks/responsiveHook";

const DownLine = (props) => {
  const width = useResponsive();

  const canvas_id = `canvas-${props.id}`;

  useEffect(() => {
    function _drawRightLine(ctx) {
      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.moveTo(canvas.width, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.stroke();
    }

    function _drawLeftLine(ctx) {
      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();
    }
    const canvas = document.getElementById(canvas_id);
    canvas.width = 0;
    canvas.height = 0;
    const ctx = canvas.getContext("2d");
    const wrapper = document.getElementById(props.id);
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#FFF";
    if (props.isRight) {
      _drawRightLine(ctx);
    } else {
      _drawLeftLine(ctx);
    }
  }, [width]);

  return (
    <div className={props.className} style={props.style} id={props.id}>
      <canvas id={canvas_id}></canvas>
    </div>
  );
};

export default DownLine;
