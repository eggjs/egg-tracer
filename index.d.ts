declare module 'egg' {
  interface Tracer {
    traceId: string;
  }

  interface Context {
    tracer: Tracer;
    traceId: string;
  }
}
