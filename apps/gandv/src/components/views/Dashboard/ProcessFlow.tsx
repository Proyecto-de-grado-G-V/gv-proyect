import React, { useState } from 'react';
import '../../../styles/processFlow.css';

type Process = {
  id: number;
  title: string;
  description: string;
  tasks: string[];
};

type Props = {
  processes: Process[];
};

export default function ProcessFlow({ processes }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<{ [key: number]: boolean[] }>(
    processes.reduce((acc, process) => {
      acc[process.id] = new Array(process.tasks.length).fill(false);
      return acc;
    }, {} as { [key: number]: boolean[] })
  );

  const handleTaskToggle = (processId: number, taskIndex: number) => {
    const updatedTasks = [...completedTasks[processId]];
    updatedTasks[taskIndex] = !updatedTasks[taskIndex];
    setCompletedTasks({ ...completedTasks, [processId]: updatedTasks });
  };

  const isStepComplete = (processId: number) =>
    completedTasks[processId]?.every((task) => task);

  const handleNextStep = () => {
    if (currentStep < processes.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="process-flow-wrapper">
      <h3 className="current-step-indicator">
        Estás en el flujo: {processes[currentStep].title}
      </h3>
      <div className="process-flow-container">
        {processes.map((process, index) => (
          <div
            key={process.id}
            className={`process-step ${index === currentStep ? 'active' : ''} ${
              index < currentStep ? 'completed' : ''
            }`}
          >
            <div className="process-content">
              <h3>{process.title}</h3>
              {process.description && <p>{process.description}</p>}
            </div>
            {index < processes.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
      </div>
      <div className="checklist-container">
        <h4>Tareas del Flujo: {processes[currentStep].title}</h4>
        <ul>
          {processes[currentStep].tasks.map((task, taskIndex) => (
            <li key={taskIndex}>
              <label>
                <input
                  type="checkbox"
                  checked={completedTasks[processes[currentStep].id][taskIndex]}
                  onChange={() =>
                    handleTaskToggle(processes[currentStep].id, taskIndex)
                  }
                />
                {task}
              </label>
            </li>
          ))}
        </ul>
        {isStepComplete(processes[currentStep].id) && (
          <button onClick={handleNextStep} className="next-step-button">
            Siguiente Flujo
          </button>
        )}
      </div>
    </div>
  );
}