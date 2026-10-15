import {
  Check,
  GraduationCap,
  ChartNoAxesCombined,
  ChevronDown,
  LayoutDashboard,
  Users,
  FileText,
  Search,
  Bell,
  CircleHelp,
} from 'lucide-react';
export default function DashboardPreview() {
  return (
    <div className="visual-scene">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="dashboard">
        <aside className="dash-sidebar">
          <span className="mini-brand">k↗</span>
          <LayoutDashboard />
          <Users />
          <FileText />
          <ChartNoAxesCombined />
          <span className="sidebar-bottom">
            <CircleHelp />
          </span>
        </aside>
        <div className="dash-main">
          <div className="dash-top">
            <span>
              Tu espacio de trabajo <ChevronDown size={12} />
            </span>
            <div>
              <Search size={13} />
              <Bell size={13} />
              <span className="avatar">KS</span>
            </div>
          </div>
          <div className="dash-heading">
            <div>
              <span className="tiny">TODO EN SU LUGAR</span>
              <h3>Una visión más clara.</h3>
            </div>
            <span className="period">
              Este mes <ChevronDown size={11} />
            </span>
          </div>
          <div className="dash-stats">
            <div>
              <span>Estudiantes</span>
              <strong>248</strong>
              <small>
                <i /> Registro académico
              </small>
            </div>
            <div>
              <span>Matrículas</span>
              <strong>186</strong>
              <small>
                <i /> Período actual
              </small>
            </div>
            <div>
              <span>Grupos</span>
              <strong>12</strong>
              <small>
                <i /> Organizados
              </small>
            </div>
          </div>
          <div className="dash-chart">
            <div className="chart-title">
              <strong>Tu información, conectada</strong>
              <span>● Actividad</span>
            </div>
            <div className="chart">
              <span>
                200
                <br />
                150
                <br />
                100
                <br />
                50
              </span>
              <div className="bars">
                {[40, 58, 46, 70, 59, 83, 71, 95, 80, 108, 98, 124].map((h, i) => (
                  <div key={i} style={{ height: h }}>
                    <i />
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-months">
              ENE <span>FEB</span>
              <span>MAR</span>
              <span>ABR</span>
              <span>MAY</span>
              <span>JUN</span>
            </div>
          </div>
          <div className="dash-table">
            <span>Últimos movimientos</span>
            <span>Ver todo ↗</span>
          </div>
          <div className="table-row">
            <span className="table-icon">
              <GraduationCap size={15} />
            </span>
            <span>
              Nueva matrícula<small>Gestión académica</small>
            </span>
            <span className="status">Registrada</span>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span>
          <Check size={18} />
        </span>
        <div>
          Todo empieza con orden.<small>Tu próximo paso, más claro.</small>
        </div>
      </div>
      <p className="visual-caption">Vista conceptual de SISAC · Datos ilustrativos</p>
    </div>
  );
}
