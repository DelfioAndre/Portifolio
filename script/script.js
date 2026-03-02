        // Adicionando interatividade aos links
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.color = '#2980b9';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.color = '#3498db';
            });
        });
        
        // Adicionando animação nas barras de habilidade
        document.addEventListener('DOMContentLoaded', function() {
            const skillBars = document.querySelectorAll('.skill-level');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 300);
            });
        });