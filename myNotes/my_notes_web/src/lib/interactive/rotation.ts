import {arrowMarkup, createPlane, number, toScreen, type Vec2} from './plane.ts';

export const rotationPlane = createPlane(3);
export const boundAngle = (angle: number) => Number.isFinite(angle) ? Math.max(0, Math.min(360, angle)) : 90;
export const snapAngle = (angle: number) => Math.round(boundAngle(angle) / 90) * 90;
export function rotation(angle: number) {
  const degrees = boundAngle(angle), radians = degrees * Math.PI / 180;
  const clean = (n: number) => Math.abs(n) < 1e-10 ? 0 : n;
  const c = clean(Math.cos(radians)), s = clean(Math.sin(radians));
  const point: Vec2 = [clean(2*c-s), clean(2*s+c)];
  return {degrees, c, s, point, power: degrees % 90 === 0 ? degrees / 90 : null};
}
/** Follow the shortest pointer movement, including the atan2 seam. */
export function draggedAngle(current: number, previous: number, next: number) {
  const delta = ((next - previous + 540) % 360) - 180;
  return boundAngle(current + delta);
}
export function rotationScene(angle: number) {
  const r = rotation(angle);
  return arrowMarkup([0,0], [2,1], 'muted', 'x', [-20,-2], rotationPlane)
    + arrowMarkup([0,0], r.point, 'accent', r.power === null ? 'R(θ)x' : '', [12,-12], rotationPlane);
}
export function rotationEquation(angle: number) {
  const {c,s,point,power} = rotation(angle);
  const fmt = (value: number) => number(Number(value.toFixed(2)));
  const relation = power === null ? String.raw`\approx` : '=';
  const matrix = String.raw`\begin{pmatrix}${fmt(c)}&${fmt(-s)}\\${fmt(s)}&${fmt(c)}\end{pmatrix}`;
  const name = power === null ? String.raw`R(\theta)` : `J^{${power}}`;
  const identity = power === 0 || power === 4 ? '=I' : power === 2 ? '=-I' : '';
  return String.raw`${name}${relation}${matrix}${identity},\qquad \colA{${name}\binom{2}{1}${relation}\binom{${fmt(point[0])}}{${fmt(point[1])}}}`;
}
export const rotationTip = (angle: number) => toScreen(rotation(angle).point, rotationPlane);
