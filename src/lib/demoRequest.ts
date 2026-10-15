export type DemoRequest = {
  name: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
};
export function buildDemoMailto(recipient: string, request: DemoRequest): string {
  const body = `Hola, equipo de Kesolucion.\n\nSoy ${request.name} de ${request.organization}.\nMe interesa: ${request.interest}.\nMi correo: ${request.email}\n\nLo que necesito resolver:\n${request.message}\n\nMe gustaría conocer la solución y solicitar una demostración.`;
  return `mailto:${recipient}?subject=${encodeURIComponent('Solicitud de demostración · ' + request.interest)}&body=${encodeURIComponent(body)}`;
}
