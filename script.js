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
        alert(`Viewing lead: ${lead.firstName} ${lead.lastName}\nStatus: ${lead.status}\nProperty: ${lead.address}`);
    }
}

function editLead(leadId) {
    const lead = sampleLeads.find(l => l.id === leadId);
    if (lead) {
        alert(`Editing lead: ${lead.firstName} ${lead.lastName}`);
        // In a real application, this would open an edit modal
    }
}

function deleteLead(leadId) {
    if (confirm('Are you sure you want to delete this lead?')) {
        const index = sampleLeads.findIndex(l => l.id === leadId);
        if (index > -1) {
            sampleLeads.splice(index, 1);
            populateLeadsTable();
            updateStats();
            alert('Lead deleted successfully');
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
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // In a real application, this would send data to a server
    console.log('Form submitted:', data);
    
    // Close the modal
    const modal = form.closest('.modal');
    if (modal) {
        closeModal(modal.id);
    }
    
    // Show success message
    alert('Data saved successfully!');
    
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
    }
}

// Setup all event listeners
function setupEventListeners() {
    setupSearch();
    setupFilters();
    setupFormHandling();
    
    // Add click event for user menu
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', function() {
            alert('User menu clicked - would show dropdown in real app');
        });
    }
    
    // Add click events for action buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-secondary')) {
            const button = e.target.closest('.btn-secondary');
            const buttonText = button.textContent.trim();
            
            if (buttonText === 'View All') {
                // Navigate to the corresponding section
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
        }
    });
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
window.exportData = exportData;
window.showNotification = showNotification;
