import { h, defineComponent, ref, computed } from 'vue';
import { off, on } from 'evtd';
import { resolveSlot } from "../../_utils/index.mjs";
import useConfig from "../../_mixins/use-config.mjs";
import style from "./styles/index.cssr.mjs";
import { useTheme } from "../../_mixins/index.mjs";
import { splitLight } from "../styles/index.mjs";
export const splitProps = Object.assign(Object.assign({}, useTheme.props), {
  direction: {
    type: String,
    default: 'horizontal'
  },
  resizeTriggerSize: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  defaultSize: {
    type: Number,
    default: 0.5
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 1
  },
  onDragStart: Function,
  onDragMove: Function,
  onDragEnd: Function
});
export default defineComponent({
  name: 'Split',
  props: splitProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('Split', '-split', style, splitLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          resizableTriggerColor,
          resizableTriggerColorHover
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-resize-trigger-color': resizableTriggerColor,
        '--n-resize-trigger-color-hover': resizableTriggerColorHover
      };
    });
    const resizeTriggerElRef = ref(null);
    const isDraggingRef = ref(false);
    const currentSize = ref(props.defaultSize);
    const firstPaneStyle = computed(() => {
      const size = currentSize.value * 100;
      return {
        flex: `0 0 calc(${size}% - ${props.resizeTriggerSize * size / 100}px)`
      };
    });
    const resizeTriggerStyle = computed(() => {
      return props.direction === 'horizontal' ? {
        width: `${props.resizeTriggerSize}px`,
        height: '100%'
      } : {
        width: '100%',
        height: `${props.resizeTriggerSize}px`
      };
    });
    const resizeTriggerWrapperStyle = computed(() => {
      const horizontal = props.direction === 'horizontal';
      return {
        width: horizontal ? `${props.resizeTriggerSize}px` : '',
        height: horizontal ? '' : `${props.resizeTriggerSize}px`,
        cursor: props.direction === 'horizontal' ? 'col-resize' : 'row-resize'
      };
    });
    let offset = 0;
    const handleMouseDown = e => {
      e.preventDefault();
      isDraggingRef.value = true;
      if (props.onDragStart) props.onDragStart(e);
      const mouseMoveEvent = 'mousemove';
      const mouseUpEvent = 'mouseup';
      const onMouseMove = e => {
        updateSize(e);
        if (props.onDragMove) props.onDragMove(e);
      };
      const onMouseUp = () => {
        off(mouseMoveEvent, document, onMouseMove);
        off(mouseUpEvent, document, onMouseUp);
        isDraggingRef.value = false;
        if (props.onDragEnd) props.onDragEnd(e);
        document.body.style.cursor = '';
      };
      document.body.style.cursor = resizeTriggerWrapperStyle.value.cursor;
      on(mouseMoveEvent, document, onMouseMove);
      on(mouseUpEvent, document, onMouseUp);
      const resizeTriggerEl = resizeTriggerElRef.value;
      if (resizeTriggerEl) {
        const elRect = resizeTriggerEl.getBoundingClientRect();
        if (props.direction === 'horizontal') {
          offset = e.clientX - elRect.left;
        } else {
          offset = elRect.top - e.clientY;
        }
      }
      updateSize(e);
    };
    const updateSize = event => {
      var _a, _b;
      const parentRect = (_b = (_a = resizeTriggerElRef.value) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
      if (!parentRect) return;
      const newSize = props.direction === 'horizontal' ? (event.clientX - parentRect.left - offset) / (parentRect.width - props.resizeTriggerSize) : (event.clientY - parentRect.top + offset) / (parentRect.height - props.resizeTriggerSize);
      currentSize.value = newSize;
      if (props.min) {
        currentSize.value = Math.max(newSize, props.min);
      }
      if (props.max) {
        currentSize.value = Math.min(currentSize.value, props.max);
      }
    };
    return {
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      resizeTriggerElRef,
      isDragging: isDraggingRef,
      mergedClsPrefix: mergedClsPrefixRef,
      resizeTriggerWrapperStyle,
      resizeTriggerStyle,
      handleMouseDown,
      firstPaneStyle
    };
  },
  render() {
    var _a, _b, _c, _d;
    return h("div", {
      class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`],
      style: this.cssVars
    }, h("div", {
      class: `${this.mergedClsPrefix}-split-pane-1`,
      style: this.firstPaneStyle
    }, (_b = (_a = this.$slots)[1]) === null || _b === void 0 ? void 0 : _b.call(_a)), !this.disabled && h("div", {
      ref: "resizeTriggerElRef",
      class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`,
      style: this.resizeTriggerWrapperStyle,
      onMousedown: this.handleMouseDown
    }, resolveSlot(this.$slots['resize-trigger'], () => [h("div", {
      style: this.resizeTriggerStyle,
      class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`]
    })])), h("div", {
      class: `${this.mergedClsPrefix}-split-pane-2`
    }, (_d = (_c = this.$slots)[2]) === null || _d === void 0 ? void 0 : _d.call(_c)));
  }
});