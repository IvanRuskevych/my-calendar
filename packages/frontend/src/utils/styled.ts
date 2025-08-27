export const shouldNotForward = (props: string[]) => (prop: PropertyKey) => !props.includes(prop as string);
