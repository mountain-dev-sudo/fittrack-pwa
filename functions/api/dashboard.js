export async function onRequestGet() {
  const upstream = 'https://script.google.com/macros/s/AKfycby4EhGbXxfXIklaYOMaFHsDCK8v_P2IfQT0ez5OcQWPLzir0yLIeXcxYnnUFHl0Wo7B/exec?api=dashboard';
  try {
    const r = await fetch(upstream, {redirect:'follow'});
    const data = await r.json();
    return Response.json(data, {headers:{'Cache-Control':'no-store'}});
  } catch (e) {
    return Response.json({error:String(e)}, {status:502});
  }
}
