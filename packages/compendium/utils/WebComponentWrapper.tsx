import { type ElementType, type FC, useEffect, useRef } from 'react';

interface WebComponentWrapperProps {
  /**
   * Args recieved from Storybook renderer.
   */
  args?: Record<string, unknown>;
  /**
   * The name of the web component to render.
   */
  componentName: ElementType | string;
}

/**
 * React wrapper so that our react-based Storybook can render web components.
 * @param {WebComponentWrapperProps} props
 */
const WebComponentWrapper: FC<WebComponentWrapperProps> = (props) => {
  const ref = useRef<HTMLElement>(null);
  const Component = props.componentName;

  useEffect(() => {
    if (ref.current && props.args) {
      Object.assign(ref.current, props.args);
    }
  }, [props.args]);

  return <Component ref={ref} />;
};

export default WebComponentWrapper;
