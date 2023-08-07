"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chatChannels: [1, 2, 3, 4]
    };
  },
  methods: {
    send(e) {
      this.messages.push(e);
    }
  }
};
if (!Array) {
  const _easycom_channelStyle2 = common_vendor.resolveComponent("channelStyle");
  _easycom_channelStyle2();
}
const _easycom_channelStyle = () => "../../components/channelStyle/channelStyle.js";
if (!Math) {
  _easycom_channelStyle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.messages, (m, k0, i0) => {
      return {
        a: common_vendor.t(m.message),
        b: m.id
      };
    }),
    b: common_vendor.f($data.chatChannels, (c, k0, i0) => {
      return {
        a: c,
        b: "4a790268-0-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Beifen/20230512流沙小程序开发/0802/uniapp_flow-master/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
