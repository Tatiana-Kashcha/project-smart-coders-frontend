import React, { useState } from 'react';
import TaskModal from './TaskModal';
import api from './api';
import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ task, groups, onDeleteTask, onUpdateTask }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMoveToGroup = () => {
    setIsMenuOpen(true);
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
   
    api.moveTaskToGroup(task.id, group)
      .then((response) => {
        
        setIsMenuOpen(false);
        // переміщення картки з завданням в іншу категорію
        onUpdateTask(response.data);
      })
      .catch((error) => {
        alert('Помилка переміщення у вибрану групу');
        console.error('Помилка переміщення', error);
      });
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    // видалення картки з завданням починається
    setIsDeleting(true);
    
   
    api.deleteTask(task.id)
      .then(() => {
        onDeleteTask(task.id);
      })
      .catch((error) => {
        alert('Помилка видалення картки');
        console.error('Помилка видалення', error);
      })
      .finally(() => {
        // видалення картки завершено
        setIsDeleting(false);
      });
  };

  return (
    <s.Toolbar>
      
      {/* Переміщення в іншу категорію */}
      <s.ToolbarBtn onClick={handleMoveToGroup}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor">
        <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" clip-path="url(#a)">
        <path d="M2.225 4.667a6.667 6.667 0 1 1 0 6.667"/>
        <path d="M8 10.667 10.667 8 8 5.333M1.333 8h9.334"/>
        </g>
        </svg>
      </s.ToolbarBtn>
      
      {/* редагування картки */}
      <s.ToolbarBtn onClick={handleEditTask}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m1.667 14.333 3.7-1.423c.236-.09.354-.136.465-.196.098-.052.192-.113.28-.182.1-.077.189-.166.368-.345L14 4.667A1.886 1.886 0 1 0 11.333 2l-7.52 7.52c-.179.18-.268.269-.345.368-.069.088-.13.182-.182.28-.06.11-.105.23-.196.466l-1.423 3.7Zm0 0 1.372-3.567c.098-.255.147-.383.231-.441a.333.333 0 0 1 .253-.054c.1.02.197.116.39.31l1.507 1.505c.193.194.29.29.31.391a.333.333 0 0 1-.054.253c-.059.084-.187.133-.442.231l-3.567 1.372Z"/>
        </svg>
      </s.ToolbarBtn>
      
      {/* видалення картки */}
      <s.ToolbarBtn onClick={handleDeleteTask} disabled={isDeleting}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M6 2h4M2 4h12M3.333 4l.4 6.009c.075 1.115.112 1.673.295 2.121a3 3 0 0 0 1.835 1.718C6.323 14 6.882 14 8 14v0c1.118 0 1.677 0 2.136-.152a3 3 0 0 0 1.836-1.718c.182-.448.22-1.006.294-2.121l.4-6.009"/>
        </svg>
        {/* {isDeleting ? 'Видалення...' : 'Видалити картку'} */}
      </s.ToolbarBtn>
      
      {/* меню вибору категорії завдання для зміни категорії*/}
      {isMenuOpen && (
        <s.ToolMenu>
          {groups.map((group) => (
            <s.ToolMenuBtn key={group.id} onClick={() => handleGroupChange(group.id)}>
              {group.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" clip-path="url(#a)">
              <path d="M2.225 4.667a6.667 6.667 0 1 1 0 6.667"/>
              <path d="M8 10.667 10.667 8 8 5.333M1.333 8h9.334"/>
              </g>
              </svg>
            </s.ToolMenuBtn>
          ))}
        </s.ToolMenu>
      )}
      
      {/* вікно редагування завдання */}
      {showEditModal && (
        <TaskModal
          task={task}
          onClose={() => setShowEditModal(false)}
          onUpdateTask={onUpdateTask}
        />
      )}
    </s.Toolbar>
  );
};





