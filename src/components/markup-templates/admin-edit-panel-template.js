export const adminEditInputTemplates = (dataKey) => {
  return `<label for="${dataKey}"><b class="label-title">${dataKey}</b></label>
    <input class="data-input" type="text" placeholder="Set here item's -${dataKey}-" name="${dataKey}" />`;
};
