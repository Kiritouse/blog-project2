"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = void 0;
// The file is for internal usage, do not export it, since all the components
// have default light theme.
const common_1 = require("../_styles/common");
const styles_1 = require("../alert/styles");
const styles_2 = require("../anchor/styles");
const styles_3 = require("../auto-complete/styles");
const styles_4 = require("../avatar/styles");
const styles_5 = require("../avatar-group/styles");
const styles_6 = require("../back-top/styles");
const styles_7 = require("../badge/styles");
const styles_8 = require("../breadcrumb/styles");
const styles_9 = require("../button/styles");
const styles_10 = require("../button-group/styles");
const styles_11 = require("../calendar/styles");
const styles_12 = require("../card/styles");
const styles_13 = require("../carousel/styles");
const styles_14 = require("../cascader/styles");
const styles_15 = require("../checkbox/styles");
const styles_16 = require("../code/styles");
const styles_17 = require("../collapse/styles");
const styles_18 = require("../collapse-transition/styles");
const styles_19 = require("../color-picker/styles");
const styles_20 = require("../data-table/styles");
const styles_21 = require("../date-picker/styles");
const styles_22 = require("../descriptions/styles");
const styles_23 = require("../dialog/styles");
const styles_24 = require("../divider/styles");
const styles_25 = require("../drawer/styles");
const styles_26 = require("../dropdown/styles");
const styles_27 = require("../dynamic-input/styles");
const styles_28 = require("../dynamic-tags/styles");
const styles_29 = require("../element/styles");
const styles_30 = require("../ellipsis/styles");
const styles_31 = require("../empty/styles");
const styles_32 = require("../equation/styles");
const styles_33 = require("../form/styles");
const styles_34 = require("../gradient-text/styles");
const styles_35 = require("../icon/styles");
const styles_36 = require("../icon-wrapper/styles");
const styles_37 = require("../image/styles");
const styles_38 = require("../input/styles");
const styles_39 = require("../input-number/styles");
const styles_40 = require("../layout/styles");
const styles_41 = require("../legacy-transfer/styles");
const styles_42 = require("../list/styles");
const styles_43 = require("../loading-bar/styles");
const styles_44 = require("../log/styles");
const styles_45 = require("../menu/styles");
const styles_46 = require("../mention/styles");
const styles_47 = require("../message/styles");
const styles_48 = require("../modal/styles");
const styles_49 = require("../notification/styles");
const styles_50 = require("../page-header/styles");
const styles_51 = require("../pagination/styles");
const styles_52 = require("../popconfirm/styles");
const styles_53 = require("../popover/styles");
const styles_54 = require("../popselect/styles");
const styles_55 = require("../progress/styles");
const styles_56 = require("../qr-code/styles");
const styles_57 = require("../radio/styles");
const styles_58 = require("../rate/styles");
const styles_59 = require("../result/styles");
const styles_60 = require("../legacy-grid/styles");
const styles_61 = require("../_internal/scrollbar/styles");
const styles_62 = require("../select/styles");
const styles_63 = require("../skeleton/styles");
const styles_64 = require("../slider/styles");
const styles_65 = require("../space/styles");
const styles_66 = require("../spin/styles");
const styles_67 = require("../statistic/styles");
const styles_68 = require("../steps/styles");
const styles_69 = require("../switch/styles");
const styles_70 = require("../table/styles");
const styles_71 = require("../tabs/styles");
const styles_72 = require("../tag/styles");
const styles_73 = require("../thing/styles");
const styles_74 = require("../time-picker/styles");
const styles_75 = require("../timeline/styles");
const styles_76 = require("../tooltip/styles");
const styles_77 = require("../transfer/styles");
const styles_78 = require("../typography/styles");
const styles_79 = require("../tree/styles");
const styles_80 = require("../tree-select/styles");
const styles_81 = require("../upload/styles");
const styles_82 = require("../watermark/styles");
const styles_83 = require("../split/styles");
const styles_84 = require("../flex/styles");
exports.lightTheme = {
    name: 'light',
    common: common_1.commonLight,
    Alert: styles_1.alertLight,
    Anchor: styles_2.anchorLight,
    AutoComplete: styles_3.autoCompleteLight,
    Avatar: styles_4.avatarLight,
    AvatarGroup: styles_5.avatarGroupLight,
    BackTop: styles_6.backTopLight,
    Badge: styles_7.badgeLight,
    Breadcrumb: styles_8.breadcrumbLight,
    Button: styles_9.buttonLight,
    ButtonGroup: styles_10.buttonGroupLight,
    Calendar: styles_11.calendarLight,
    Card: styles_12.cardLight,
    Carousel: styles_13.carouselLight,
    Cascader: styles_14.cascaderLight,
    Checkbox: styles_15.checkboxLight,
    Code: styles_16.codeLight,
    Collapse: styles_17.collapseLight,
    CollapseTransition: styles_18.collapseTransitionLight,
    ColorPicker: styles_19.colorPickerLight,
    DataTable: styles_20.dataTableLight,
    DatePicker: styles_21.datePickerLight,
    Descriptions: styles_22.descriptionsLight,
    Dialog: styles_23.dialogLight,
    Divider: styles_24.dividerLight,
    Drawer: styles_25.drawerLight,
    Dropdown: styles_26.dropdownLight,
    DynamicInput: styles_27.dynamicInputLight,
    DynamicTags: styles_28.dynamicTagsLight,
    Element: styles_29.elementLight,
    Empty: styles_31.emptyLight,
    Equation: styles_32.equationLight,
    Ellipsis: styles_30.ellipsisLight,
    Flex: styles_84.flexLight,
    Form: styles_33.formLight,
    GradientText: styles_34.gradientTextLight,
    Icon: styles_35.iconLight,
    IconWrapper: styles_36.iconWrapperLight,
    Image: styles_37.imageLight,
    Input: styles_38.inputLight,
    InputNumber: styles_39.inputNumberLight,
    Layout: styles_40.layoutLight,
    LegacyTransfer: styles_41.legacyTransferLight,
    List: styles_42.listLight,
    LoadingBar: styles_43.loadingBarLight,
    Log: styles_44.logLight,
    Menu: styles_45.menuLight,
    Mention: styles_46.mentionLight,
    Message: styles_47.messageLight,
    Modal: styles_48.modalLight,
    Notification: styles_49.notificationLight,
    PageHeader: styles_50.pageHeaderLight,
    Pagination: styles_51.paginationLight,
    Popconfirm: styles_52.popconfirmLight,
    Popover: styles_53.popoverLight,
    Popselect: styles_54.popselectLight,
    Progress: styles_55.progressLight,
    QrCode: styles_56.qrcodeLight,
    Radio: styles_57.radioLight,
    Rate: styles_58.rateLight,
    Row: styles_60.rowLight,
    Result: styles_59.resultLight,
    Scrollbar: styles_61.scrollbarLight,
    Skeleton: styles_63.skeletonLight,
    Select: styles_62.selectLight,
    Slider: styles_64.sliderLight,
    Space: styles_65.spaceLight,
    Spin: styles_66.spinLight,
    Statistic: styles_67.statisticLight,
    Steps: styles_68.stepsLight,
    Switch: styles_69.switchLight,
    Table: styles_70.tableLight,
    Tabs: styles_71.tabsLight,
    Tag: styles_72.tagLight,
    Thing: styles_73.thingLight,
    TimePicker: styles_74.timePickerLight,
    Timeline: styles_75.timelineLight,
    Tooltip: styles_76.tooltipLight,
    Transfer: styles_77.transferLight,
    Tree: styles_79.treeLight,
    TreeSelect: styles_80.treeSelectLight,
    Typography: styles_78.typographyLight,
    Upload: styles_81.uploadLight,
    Watermark: styles_82.watermarkLight,
    Split: styles_83.splitLight
};
