export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
