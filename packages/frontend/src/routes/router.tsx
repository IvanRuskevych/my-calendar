import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Layout } from '~/components/layout/Layout.tsx';
import { Calendar } from '~/modules/calendar/Calendar.tsx';
import { ROUTER_KEYS } from '~/shared/constants/keys.ts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER_KEYS.ROOT} element={<Layout />}>
      <Route path={ROUTER_KEYS.CALENDAR} element={<Calendar />} />
      <Route path={ROUTER_KEYS.ALL_MATCH} element={<Navigate to={ROUTER_KEYS.ROOT} replace />} />
    </Route>,
  ),
);
