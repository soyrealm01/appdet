* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  background-color: #0f1624;
  color: white;
  min-height: 100vh;
}

.container {
  max-width: 480px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
}

.back-button {
  color: white;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.competition-name {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}

.match-score {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.team-logo {
  width: 65px;
  height: 65px;
  border-radius: 20%;
  background-color: #2a3142;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.team-logo img {
  width: 85%;
  height: auto;
}

.team-name {
  font-size: 12px;
  text-align: center;
}

.score {
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
}

.score-divider {
  margin: 0 10px;
  color: #666;
}

.match-time {
  text-align: center;
  font-size: 14px;
  color: #aaa;
}

.match-actions {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 5px solid #2a3142;
}

.action-button {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: none;
}

.action-button.active {
  background-color: #ff6b4a;
  color: white;
}

.formation-section {
  padding: 10px;
}

.formation-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.formation-subtitle {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
  text-align: center;
}

.team-tabs {
  display: flex;
  margin-bottom: 10px;
}

.team-tab {
  flex: 1;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  margin: 0 5px;
}

.team-tab.active {
  background-color: #ff6b4a;
  color: white;
}

.pitch {
  width: 100%;
  height: 500px;
  background-color: #4caf50;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.pitch-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
}

.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
}

.halfway-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(255, 255, 255);
  transform: translateY(-50%);
}

.penalty-box-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 20%;
  border-bottom: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.penalty-box-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 20%;
  border-top: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.goal-box-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 8%;
  border-bottom: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.goal-box-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 8%;
  border-top: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.goal-top {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  height: 5px;
  background-color: rgb(255, 255, 255);
}

.goal-bottom {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  height: 5px;
  background-color: rgb(255, 255, 255);
}

.player {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 2;
}

.player:hover {
  transform: scale(1.2);
  z-index: 3;
}

.player-name {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 10px;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}

.player.captain {
  border: 2px solid gold;
}

.player.yellow-card {
  box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.5);
}

.player.red-card {
  box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5);
}

.player.substituted {
  opacity: 0.7;
}

.player-details {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a2235;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 300px;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.player-details-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.player-details-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
}

.player-details-info h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.player-details-info p {
  font-size: 14px;
  color: #aaa;
}

.player-details-stats {
  margin-top: 15px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 14px;
  color: #aaa;
}

.stat-value {
  font-size: 14px;
  font-weight: bold;
}

.close-details {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
}

/* Grass pattern */
.pitch::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.101) 10px,
    rgba(0, 0, 0, 0.101) 20px
  );
  z-index: 1;
}

/* Animations */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.score {
  animation: pulse 1s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .pitch {
    height: 400px;
  }
  
  .player {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
  
  .player-name {
    font-size: 10px;
  }
}

/* Standings Tab Content */
.stats-container {
  padding: 20px;
  display: none;
}

/* Standings table styles */
.standings-table {
  width: 100%;
  overflow-x: auto;
  border-radius: 10px;
}

.league-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 14px;
}

.league-table th {
  padding: 10px 5px;
  text-align: center;
  font-weight: 500;
  color: #aaa;
  border-bottom: 1px solid #2a3142;
}

.league-table th:first-child {
  width: 30px;
}

.league-table th:nth-child(2) {
  text-align: left;
}

.league-table td {
  padding: 12px 5px;
  text-align: center;
  border-bottom: 1px solid #2a3142;
}

.team-cell {
  display: flex;
  align-items: center;
  text-align: left;
}

.table-team-logo {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.table-row:nth-child(1) {
  background-color: rgba(59, 89, 152, 0.2);
}

.table-row:nth-child(2),
.table-row:nth-child(3),
.table-row:nth-child(4) {
  background-color: rgba(59, 89, 152, 0.1);
}

.table-row:nth-child(5),
.table-row:nth-child(6) {
  background-color: rgba(220, 53, 69, 0.1);
}

/* H2H tab styles */
.h2h-container {
  padding: 20px;
  display: none;
}

.h2h-summary {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  text-align: center;
}

.h2h-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h2h-value {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.h2h-label {
  font-size: 12px;
  color: #aaa;
}

.previous-matches {
  margin-top: 20px;
}

.previous-match {
  background-color: #1a2235;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
}

.previous-match-date {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
}

.previous-match-teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.previous-match-team {
  display: flex;
  align-items: center;
}

.previous-match-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.previous-match-score {
  font-weight: bold;
  margin: 0 10px;
}

/* Line-up tab styles */
.lineup-container {
  padding: 20px;
  display: none;
}

.lineup-team {
  margin-bottom: 30px;
}

.lineup-team-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.lineup-team-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.lineup-team-name {
  font-size: 18px;
  font-weight: bold;
}

.lineup-players {
  display: flex;
  flex-direction: column;
}

.lineup-player {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #2a3142;
}

.lineup-player-number {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ff6b4a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 15px;
}

.lineup-player-number.away {
  background-color: #3498db;
}

.lineup-player-name {
  flex: 1;
}

.lineup-player-position {
  font-size: 12px;
  color: #aaa;
}

/* Animations for tab switching */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }

}
