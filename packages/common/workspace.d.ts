// workspace.d.ts - Workspace-specific type declarations

// General wildcard for all image types
declare module "@workspace/assets/images/*" {
  const src: string;
  export default src;
}
