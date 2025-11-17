import React from 'react';
import { Link } from 'react-router-dom'; 

const LearningCard = ({ title, subTitle, description, items, icon: Icon, color, bgColor, path }) => {
  return (

    <Link 
        to={path} 
        style={{

            textDecoration: 'none', 
            color: 'inherit',
            display: 'block',
            height: '100%',
            

            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
        }}
       
        onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'translateY(-5px)';
             e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        }}
    >
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                    backgroundColor: bgColor, 
                    borderRadius: '8px', 
                    padding: '10px', 
                    marginRight: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '28px' }}>{Icon}</span>
                </div>
                
                <div>
                    <h3 style={{ margin: '0', fontSize: '1.4em', color: color }}>{title}</h3>
                    <p style={{ margin: '0', fontSize: '1.4em', fontWeight: 'bold', color: '#333' }}>{subTitle}</p>
                </div>
            </div>

            <p style={{ fontSize: '0.95em', color: '#555', marginBottom: '20px', flexGrow: 1 }}>
                {description}
            </p>
            
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: 'auto' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px', fontSize: '0.9em', color: '#333' }}>{item}</li>
                ))}
            </ul>
        </div>
    </Link>
  );
};


const LearningHub = () => {

    const modules = [
        {
            title: 'Basic AI', subTitle: 'Understanding', description: 'Memahami konsep dasar cara kerja AI dan model bahasa',
            items: ['Apa itu AI', 'Cara kerja model bahasa', 'Machine learning basics', 'Contoh penggunaan sehari-hari'],
            icon: '🧠', color: '#4a90e2', bgColor: '#e3f2fd', path: '/notfound' 
        },
        {
            title: 'Prompt', subTitle: 'Engineering', description: 'Teknik membuat prompt yang efektif untuk hasil terbaik',
            items: ['Jenis prompt', 'Teknik refinement', 'Prompt untuk coding, desain, dan riset', 'Latihan membuat prompt'],
            icon: '💻', color: '#8b5cf6', bgColor: '#f3e8ff', path: '/notfound'
        },
        {
            title: 'Ethics &', subTitle: 'Safety', description: 'Belajar menggunakan AI secara etis dan aman',
            items: ['Privasi & data', 'Bias AI', 'Responsible AI'],
            icon: '🛡️', color: '#f5a623', bgColor: '#fff8e1', path: '/notfound'
        },
        {
            title: 'Real Practical', subTitle: 'Use', description: 'Penerapan AI di kehidupan nyata dalam berbagai',
            items: ['Office productivity', 'Coding assist', 'Creative workflow'],
            icon: '⚙️', color: '#50e3c2', bgColor: '#e0f7fa', path: '/notfound'
        },
    ];

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            
            <header style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Learning Hub</h1>
                <p style={{ fontSize: '1.1em', color: '#666' }}>Pelajari dasar AI, teknik prompt, dan etika penggunaan AI - langkah demi langkah.</p>
            </header>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
            }}>
                {modules.map((module, index) => (
                    <LearningCard 
                        key={index}
                        title={module.title}
                        subTitle={module.subTitle}
                        description={module.description}
                        items={module.items}
                        icon={module.icon}
                        color={module.color}
                        bgColor={module.bgColor}
                        path={module.path} 
                    />
                ))}
            </div>
            <div style={{ borderTop: '1px solid #ddd', marginTop: '40px' }} />
        </div>
    );
};

export default LearningHub;