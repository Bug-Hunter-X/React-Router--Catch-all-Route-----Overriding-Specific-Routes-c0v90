# React Router Catch-all Route Issue

This repository demonstrates a common issue in React Router v6 where a catch-all route (`path="*"`) unintentionally overrides more specific routes.  The problem arises when the catch-all route is placed after more specific routes, causing it to always match before other routes get a chance.

## Problem
The provided `App.js` shows how the `NotFound` component (defined by the catch-all route) is always rendered, even when navigating to paths like `/about` which should match a more specific route.

## Solution
The solution (`AppSolution.js`) demonstrates how to correctly order routes to prevent this conflict. By placing more specific routes *after* the catch-all route, the catch-all acts as a fallback only when no other routes match.