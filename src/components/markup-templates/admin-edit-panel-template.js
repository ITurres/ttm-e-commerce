export const adminEditInputTemplates = (itemId, dataKey, keyValue) => {
  return `<label for="${dataKey}"><b class="label-title">${dataKey}</b></label>
    <input id="${itemId}" class="data-input ${dataKey}" type="text" placeholder="Set here item's -${dataKey}-"
     name="${dataKey}" value="${keyValue}" required data-admin-item-inputs/>`;
};
