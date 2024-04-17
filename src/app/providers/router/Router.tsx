import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ROUTER_CONFIG } from './config';

export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTER_CONFIG.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}
