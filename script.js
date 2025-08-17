// Sample data for the CRM system
const sampleLeads = [
    {
        id: 'ECO4-2024-001',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@email.com',
        phone: '07700 900123',
        address: '123 Green Street, London',
        propertyType: 'Semi-detached',
        grantType: 'Solar Panels',
        status: 'Pending Assessment',
        assignedTo: 'Sarah Johnson',
        createdDate: '2024-08-15'
    },
    {
        id: 'ECO4-2024-002',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@email.com',
        phone: '07700 900456',
        address: '456 Eco Avenue, Manchester',
        propertyType: 'Flat',
        grantType: 'Insulation',
        status: 'Approved',
        assignedTo: 'Mike Wilson',
        createdDate: '2024-08-14'
    },
    {
        id: 'ECO4-2024-003',
        firstName: 'Mike',
        lastName: 'Wilson',
        email: 'mike.wilson@email.com',
        phone: '07700 900789',
        address: '789 Solar Road, Birmingham',
        propertyType: 'Detached',
        grantType: 'Combined Package',
        status: 'Work in Progress',
        assignedTo: 'Green Energy Solutions',
        createdDate: '2024-08-13'
    },
    {
        id: 'ECO4-2024-004',
        firstName: 'Emma',
        lastName: 'Brown',
        email: 'emma.brown@email.com',
        phone: '07700 900012',
        address: '321 Thermal Lane, Leeds',
        propertyType: 'Terraced',
        grantType: 'Heat Pump',
        status: 'New',
        assignedTo: 'Unassigned',
        createdDate: '2024-08-16'
    },
    {
        id: 'ECO4-2024-005',
        firstName: 'David',
        lastName: 'Taylor',
        email: 'david.taylor@email.com',
        phone: '07700 900345',
        address: '654 Renewable Way, Bristol',
        propertyType: 'Semi-detached',
        grantType: 'Solar Panels',
        status: 'Completed',
        assignedTo: 'Eco Install Ltd',
        createdDate: '2024-08-10'
    }
];

const sampleSubcontractors = [
    {
        id: 1,
        companyName: 'Green Energy Solutions',
        contactPerson: 'John Green',
        phone: '07700 900123',
        email: 'john@greenenergy.co.uk',
        specializations: ['Solar Panels', 'Heat Pumps'],
        certifications: ['MCS', 'TrustMark', 'Gas Safe'],
        rating: 4.8,
        activeProjects: 12,
        completedProjects: 45,
        status: 'Active'
    },
    {
        id: 2,
        companyName: 'Eco Install Ltd',
        contactPerson: 'Mike Eco',
        phone: '07700 900456',
        email: 'mike@ecoinstall.co.uk',
        specializations: ['Insulation', 'Boiler Replacement'],
        certifications: ['TrustMark', 'PAS 2030'],
        rating: 4.6,
        activeProjects: 8,
        completedProjects: 32,
        status: 'Active'
    },
    {
        id: 3,
        companyName: 'Solar Systems UK',
        contactPerson: 'Lisa Solar',
        phone: '07700 900789',
        email: 'lisa@solarsystems.co.uk',
        specializations: ['Solar Panels'],
        certifications: ['MCS', 'TrustMark'],
        rating: 4.9,
        activeProjects: 15,
        completedProjects: 67,
        status: 'Active'
    }
];

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const pageTitle = document.getElementById('pageTitle');
const leadsTableBody = document.getElementById('leadsTableBody');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateLeadsTable();
    setupEventListeners();
    updateStats();
    setupAllButtonHandlers();
});

// Navigation functionality
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.parentElement.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the corresponding content section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Update page title
                const linkText = this.querySelector('span').textContent;
                pageTitle.textContent = linkText;
            }
        });
    });
}

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Populate leads table
function populateLeadsTable() {
    if (!leadsTableBody) return;
    
    leadsTableBody.innerHTML = '';
    
    sampleLeads.forEach(lead => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.id}</td>
            <td>${lead.firstName} ${lead.lastName}</td>
            <td>${lead.address}</td>
            <td>${lead.propertyType}</td>
            <td>${lead.grantType}</td>
            <td><span class="lead-status ${getStatusClass(lead.status)}">${lead.status}</span></td>
            <td>${lead.assignedTo}</td>
            <td>${formatDate(lead.createdDate)}</td>
            <td>
                <button class="btn-icon" onclick="viewLead('${lead.id}')" title="View Lead">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" onclick="editLead('${lead.id}')" title="Edit Lead">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteLead('${lead.id}')" title="Delete Lead">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        leadsTableBody.appendChild(row);
    });
}

// Get status class for styling
function getStatusClass(status) {
    const statusMap = {
        'New': 'new',
        'Pending Assessment': 'pending',
        'Approved': 'approved',
        'Work in Progress': 'in-progress',
        'Completed': 'completed',
        'Rejected': 'rejected'
    };
    return statusMap[status] || 'new';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Lead management functions
function viewLead(leadId) {
    const lead = sampleLeads.find(l => l.id === leadId);
    if (lead) {
        // Populate the view modal with lead data
        document.getElementById('viewLeadId').textContent = lead.id;
        document.getElementById('viewLeadName').textContent = `${lead.firstName} ${lead.lastName}`;
        document.getElementById('viewLeadEmail').textContent = lead.email;
        document.getElementById('viewLeadPhone').textContent = lead.phone;
        document.getElementById('viewLeadAddress').textContent = lead.address;
        document.getElementById('viewLeadPropertyType').textContent = lead.propertyType;
        document.getElementById('viewLeadGrantType').textContent = lead.grantType;
        document.getElementById('viewLeadStatus').innerHTML = `<span class="lead-status ${getStatusClass(lead.status)}">${lead.status}</span>`;
        document.getElementById('viewLeadAssignedTo').textContent = lead.assignedTo;
        document.getElementById('viewLeadCreatedDate').textContent = formatDate(lead.createdDate);
        
        // Store the current lead ID for edit functionality
        window.currentLeadId = leadId;
        
        // Open the view modal
        openModal('viewLeadModal');
    }
}

function editLead(leadId) {
    const lead = sampleLeads.find(l => l.id === leadId);
    if (lead) {
        // Populate the edit form with lead data
        document.getElementById('editLeadId').value = lead.id;
        document.getElementById('editFirstName').value = lead.firstName;
        document.getElementById('editLastName').value = lead.lastName;
        document.getElementById('editEmail').value = lead.email;
        document.getElementById('editPhone').value = lead.phone;
        document.getElementById('editAddress').value = lead.address;
        document.getElementById('editPropertyType').value = lead.propertyType;
        document.getElementById('editGrantType').value = lead.grantType;
        document.getElementById('editStatus').value = lead.status;
        document.getElementById('editAssignedTo').value = lead.assignedTo;
        document.getElementById('editNotes').value = lead.notes || '';
        
        // Open the edit modal
        openModal('editLeadModal');
    }
}

function editCurrentLead() {
    // Close view modal and open edit modal for current lead
    closeModal('viewLeadModal');
    if (window.currentLeadId) {
        editLead(window.currentLeadId);
    }
}

function deleteLead(leadId) {
    if (confirm('Are you sure you want to delete this lead?')) {
        const index = sampleLeads.findIndex(l => l.id === leadId);
        if (index > -1) {
            sampleLeads.splice(index, 1);
            populateLeadsTable();
            updateStats();
            showNotification('Lead deleted successfully', 'success');
        }
    }
}

// Update dashboard stats
function updateStats() {
    const totalLeads = sampleLeads.length;
    const activeSubcontractors = sampleSubcontractors.filter(s => s.status === 'Active').length;
    const activeProjects = sampleLeads.filter(l => l.status === 'Work in Progress').length;
    
    // Update stats in the dashboard
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = totalLeads;
        statNumbers[1].textContent = activeSubcontractors;
        statNumbers[2].textContent = activeProjects;
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterLeads(searchTerm);
        });
    }
}

function filterLeads(searchTerm) {
    const rows = leadsTableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Filter functionality
function setupFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            applyFilters();
        });
    });
}

function applyFilters() {
    const statusFilter = document.querySelector('select[class*="filter-select"]').value;
    const propertyTypeFilter = document.querySelectorAll('select[class*="filter-select"]')[1]?.value;
    
    const rows = leadsTableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const status = row.querySelector('.lead-status')?.textContent;
        const propertyType = row.cells[3]?.textContent;
        
        let showRow = true;
        
        if (statusFilter && status !== statusFilter) {
            showRow = false;
        }
        
        if (propertyTypeFilter && propertyType !== propertyTypeFilter) {
            showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

// Form handling
function setupFormHandling() {
    const forms = document.querySelectorAll('.modal-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
}

function handleFormSubmit(form) {
    const data = {};
    
    // Get all form inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            // Handle checkboxes - collect all checked values for arrays
            if (input.name === 'specializations' || input.name === 'certifications') {
                if (!data[input.name]) {
                    data[input.name] = [];
                }
                if (input.checked) {
                    data[input.name].push(input.value);
                }
            } else {
                data[input.name || input.value] = input.checked;
            }
        } else {
            data[input.name] = input.value;
        }
    });
    
    // In a real application, this would send data to a server
    console.log('Form submitted:', data);
    
    // Close the modal
    const modal = form.closest('.modal');
    if (modal) {
        closeModal(modal.id);
    }
    
    // Show success message
    showNotification('Data saved successfully!', 'success');
    
    // Refresh the page or update the table
    if (form.closest('#addLeadModal')) {
        // Add new lead to the array
        const newLead = {
            id: `ECO4-2024-${String(sampleLeads.length + 1).padStart(3, '0')}`,
            firstName: data.firstName || 'New',
            lastName: data.lastName || 'Lead',
            email: data.email || 'new@email.com',
            phone: data.phone || '07700 900000',
            address: data.address || 'New Address',
            propertyType: data.propertyType || 'Unknown',
            grantType: data.grantType || 'Unknown',
            status: 'New',
            assignedTo: 'Unassigned',
            createdDate: new Date().toISOString().split('T')[0]
        };
        
        sampleLeads.unshift(newLead);
        populateLeadsTable();
        updateStats();
    } else if (form.closest('#editLeadModal')) {
        // Update existing lead
        const leadId = data.leadId;
        const leadIndex = sampleLeads.findIndex(l => l.id === leadId);
        
        if (leadIndex > -1) {
            sampleLeads[leadIndex] = {
                ...sampleLeads[leadIndex],
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                propertyType: data.propertyType,
                grantType: data.grantType,
                status: data.status,
                assignedTo: data.assignedTo,
                notes: data.notes
            };
            
            populateLeadsTable();
            updateStats();
            showNotification('Lead updated successfully!', 'success');
        }
    } else if (form.closest('#addSubcontractorModal')) {
        // Add new subcontractor to the array
        const newSubcontractor = {
            id: sampleSubcontractors.length + 1,
            companyName: data.companyName || 'New Company',
            contactPerson: data.contactPerson || 'New Contact',
            phone: data.phone || '07700 900000',
            email: data.email || 'new@company.com',
            specializations: data.specializations || [],
            certifications: data.certifications || [],
            rating: 0,
            activeProjects: 0,
            completedProjects: 0,
            status: 'Active'
        };
        
        sampleSubcontractors.push(newSubcontractor);
        showNotification('Subcontractor added successfully!', 'success');
    }
}

// Setup all button handlers
function setupAllButtonHandlers() {
    // Dashboard "View All" buttons
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;
        
        const buttonText = button.textContent.trim();
        
        // Handle "View All" buttons
        if (buttonText === 'View All') {
            const section = button.closest('.dashboard-card');
            if (section) {
                const cardTitle = section.querySelector('h3').textContent;
                if (cardTitle.includes('Leads')) {
                    document.querySelector('a[href="#leads"]').click();
                } else if (cardTitle.includes('Subcontractor')) {
                    document.querySelector('a[href="#subcontractors"]').click();
                }
            }
        }
        
        // Handle "View Details" buttons
        if (buttonText === 'View Details') {
            const card = button.closest('.subcontractor-card, .project-card');
            if (card) {
                const title = card.querySelector('h3, h4')?.textContent;
                showNotification(`Viewing details for: ${title}`, 'info');
            }
        }
        
        // Handle "Assign Project" buttons
        if (buttonText === 'Assign Project') {
            const card = button.closest('.subcontractor-card');
            if (card) {
                const companyName = card.querySelector('h3')?.textContent;
                showNotification(`Assigning project to: ${companyName}`, 'info');
            }
        }
        
        // Handle "Update Progress" buttons
        if (buttonText === 'Update Progress') {
            const card = button.closest('.project-card');
            if (card) {
                const projectId = card.querySelector('h3')?.textContent;
                showNotification(`Updating progress for: ${projectId}`, 'info');
            }
        }
        
        // Handle "Create Project" button
        if (buttonText === 'Create Project') {
            showNotification('Opening project creation form...', 'info');
            // In a real app, this would open a project creation modal
        }
        
        // Handle "Export Report" button
        if (buttonText === 'Export Report') {
            exportData();
        }
        
        // Handle "Add User" button
        if (buttonText === 'Add User') {
            showNotification('Opening user creation form...', 'info');
            // In a real app, this would open a user creation modal
        }
        
        // Handle "Manage Permissions" button
        if (buttonText === 'Manage Permissions') {
            showNotification('Opening permissions management...', 'info');
            // In a real app, this would open a permissions modal
        }
    });
    
    // Handle user menu click
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', function() {
            showNotification('User menu clicked - would show dropdown in real app', 'info');
        });
    }
    
    // Handle recent lead action buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.lead-actions .btn-icon')) {
            const button = e.target.closest('.btn-icon');
            const leadItem = button.closest('.lead-item');
            const leadName = leadItem.querySelector('h4')?.textContent;
            
            if (button.querySelector('.fa-eye')) {
                showNotification(`Viewing lead: ${leadName}`, 'info');
            } else if (button.querySelector('.fa-edit')) {
                showNotification(`Editing lead: ${leadName}`, 'info');
            }
        }
    });
}

// Setup all event listeners
function setupEventListeners() {
    setupSearch();
    setupFilters();
    setupFormHandling();
}

// Export functionality
function exportData() {
    const data = {
        leads: sampleLeads,
        subcontractors: sampleSubcontractors,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `eco4-crm-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (type === 'success') {
        notification.style.backgroundColor = '#059669';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc2626';
    } else {
        notification.style.backgroundColor = '#2563eb';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Auto-save functionality (simulated)
function autoSave() {
    // In a real application, this would save data to localStorage or send to server
    console.log('Auto-saving data...');
}

// Set up auto-save every 30 seconds
setInterval(autoSave, 30000);

// Performance monitoring
function logPerformance() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
}

// Log performance on page load
window.addEventListener('load', logPerformance);

// Export functions to global scope for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.viewLead = viewLead;
window.editLead = editLead;
window.deleteLead = deleteLead;
window.editCurrentLead = editCurrentLead;
window.exportData = exportData;
window.showNotification = showNotification;

