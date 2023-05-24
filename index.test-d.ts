import { expectType } from 'tsd';
import '.';
import { Context } from 'egg';

const ctx = {} as Context;

expectType<string>(ctx.traceId);
expectType<string>(ctx.tracer.traceId);
