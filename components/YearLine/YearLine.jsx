import React, { useEffect } from "react";
import useResponsive, { SIZES } from "../../hooks/responsiveHook";

const YearLine = (props) => {
  const canvas_id = `canvas-${props.id}`;

  const width = useResponsive();

  useEffect(() => {
    function _drawMiddleCircle(ctx) {
      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#FFF";
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 360);
      ctx.fill();
    }

    function _drawText(text, ctx) {
      ctx.font = "13px Arial";
      ctx.fillStyle = "#1a1a2e";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }

    function _drawLine(ctx, right = true) {
      ctx.fillStyle = "#FFF";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(right ? canvas.width : 0, canvas.height / 2);
      ctx.stroke();
    }

    function _drawLeftConector(ctx, up = true) {
      ctx.fillStyle = "#FFF";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(0, up ? 0 : canvas.height);
      ctx.stroke();
    }

    function _drawRightConector(ctx, up = true) {
      ctx.fillStyle = "#FFF";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.moveTo(canvas.width, canvas.height / 2);
      ctx.lineTo(canvas.width, up ? 0 : canvas.height);
      ctx.stroke();
    }

    const canvas = document.getElementById(canvas_id);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#FFF";

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    _drawMiddleCircle(ctx);

    if (props.leftSide) {
      _drawLine(ctx, !props.leftSide);
    }
    if (props.rightSide) {
      _drawLine(ctx, props.rightSide);
    }
    if (props.leftConector) {
      _drawLeftConector(ctx, props.leftConector === "up");
    }
    if (props.rightConector) {
      _drawRightConector(ctx, props.rightConector === "up");
    }

    _drawText(props.year || "", ctx);
  }, [width]);

  return <canvas id={canvas_id} className={props.className}></canvas>;
};

export default YearLine;
