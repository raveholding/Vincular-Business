// Lectura de los fragmentos generados por tools/extraer_web.py (se leen al compilar: las páginas son estáticas).
import fs from 'node:fs';
import path from 'node:path';

export const leer = (archivo: string) =>
  fs.readFileSync(path.join(process.cwd(), 'content', archivo), 'utf8');
