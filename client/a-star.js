// Generated by CoffeeScript 1.6.2
var M, cx, cy, m, r, s, x, y, _i, _j;

M = [];

s = 11;

cx = s >> 1;

cy = s >> 1;

m = "";

for (y = _i = -cy; -cy <= cy ? _i <= cy : _i >= cy; y = -cy <= cy ? ++_i : --_i) {
  M[cy + y] = [];
  r = "  ";
  r += y>=0?' '+y+'\t':y+'\t';
  for (x = _j = -cx; -cx <= cx ? _j <= cx : _j >= cx; x = -cx <= cx ? ++_j : --_j) {
    if ((x + (y >> 1)) % 2) {
      r += "#";
      M[cy + y][cx + x] = 1;
    } else {
      r += ".";
      M[cy + y][cx + x] = 0;
    }
    r += " ";
  }
  m += r + "\n";
}

console.log(m);
