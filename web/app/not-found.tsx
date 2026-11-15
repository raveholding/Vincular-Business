export default function NoEncontrada() {
  return (
    <main id="main" className="sec">
      <div className="wrap angosto">
        <p className="sec-num"><span>404</span>Página no encontrada</p>
        <h1 className="h1-chico">Esta página no existe</h1>
        <p className="lead">Puede que el enlace haya cambiado.</p>
        <p style={{ marginTop: 24 }}><a className="btn btn-pri" href="/">Ir al inicio</a></p>
      </div>
    </main>
  );
}
