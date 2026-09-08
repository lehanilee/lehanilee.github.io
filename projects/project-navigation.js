const projectPages = [
  { file: 'enterprise-data-catalog.html', title: 'Customer Journey Builder' },
  { file: 'design-system-refresh.html', title: 'Defining Error States' },
  { file: 'guided-onboarding.html', title: 'Online Ordering Menus' },
  { file: 'scanning-inventory.html', title: 'Scanning Inventory' },
];

const currentFile = window.location.pathname.split('/').pop();
const currentIndex = projectPages.findIndex((project) => project.file === currentFile);
const pagination = document.querySelector('.project-pagination');

if (pagination && currentIndex !== -1) {
  const previous = projectPages[(currentIndex - 1 + projectPages.length) % projectPages.length];
  const next = projectPages[(currentIndex + 1) % projectPages.length];

  const createPreview = (project, label, direction) => {
    const link = document.createElement('a');
    const labelElement = document.createElement('span');
    const titleElement = document.createElement('span');

    link.className = `project-preview project-preview--${direction}`;
    link.href = project.file;
    labelElement.className = 'project-preview-label';
    labelElement.textContent = label;
    titleElement.className = 'project-preview-title';
    titleElement.textContent = project.title;
    link.append(labelElement, titleElement);
    return link;
  };

  pagination.append(
    createPreview(previous, 'Previous project', 'previous'),
    createPreview(next, 'Next project', 'next')
  );
}
