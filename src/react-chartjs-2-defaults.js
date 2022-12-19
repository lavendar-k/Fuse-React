import { Chart } from 'react-chartjs-2';

Chart.pluginService.register({
  afterDatasetsDraw(chart, easing) {
    // Only activate the plugin if it's made available
    // in the options
    if (
      !chart.options.plugins.xLabelsOnTop ||
      (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
    ) {
      return;
    }

    // To only draw at the end of animation, check for easing === 1
    const { ctx } = chart;

    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);

      if (!meta.hidden) {
        meta.data.forEach((element, index) => {
          // Draw the text in black, with the specified font
          ctx.fillStyle = chart.options.plugins.xLabelsOnTop.fontColor || 'rgba(0, 0, 0, 0.87)';
          const fontSize = 13;
          const fontStyle = 'normal';
          const fontFamily = 'Poppins, Roboto, Helvetica Neue, Arial, sans-serif';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          // Just naively convert to string for now
          const dataString = `${dataset.data[index].toString()}k`;

          // Make sure alignment settings are correct
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const padding = 15;
          const startY = 24;
          const position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, startY);

          ctx.save();

          ctx.beginPath();
          ctx.setLineDash([3, 5]);
          ctx.moveTo(position.x, startY + padding);
          ctx.lineTo(position.x, position.y - padding);
          ctx.strokeStyle = chart.options.plugins.xLabelsOnTop.borderColor || 'rgba(0, 0, 0, 0.87)';

          ctx.stroke();

          ctx.restore();
        });
      }
    });
  },
});
