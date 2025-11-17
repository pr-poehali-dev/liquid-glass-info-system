import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('all')
  
  const workSections = [
    { id: 'purchases', label: 'Закупки', icon: 'ShoppingCart' },
    { id: 'legal', label: 'Юрист', icon: 'Scale' },
    { id: 'finance', label: 'Финотдел', icon: 'CircleDollarSign' },
    { id: 'technical', label: 'Техдокументация', icon: 'FileText' },
    { id: 'custom', label: 'Произвольная проверка', icon: 'Search' },
  ]

  const citizenTopics = [
    { word: 'Отопление', size: 'text-5xl', weight: 'font-bold' },
    { word: 'Дороги', size: 'text-3xl', weight: 'font-semibold' },
    { word: 'Благоустройство', size: 'text-2xl', weight: 'font-medium' },
    { word: 'ЖКХ', size: 'text-3xl', weight: 'font-semibold' },
    { word: 'Транспорт', size: 'text-xl', weight: 'font-normal' },
    { word: 'Образование', size: 'text-2xl', weight: 'font-medium' },
    { word: 'Медицина', size: 'text-xl', weight: 'font-normal' },
    { word: 'Безопасность', size: 'text-2xl', weight: 'font-medium' },
  ]

  const tasks = [
    { 
      id: 1, 
      title: 'Подготовить отчет по социальным программам', 
      deadline: '18.11.2025',
      aiTip: 'Используйте шаблон отчета Q4-2025 и данные из раздела "Связь с госпрограммами"'
    },
    { 
      id: 2, 
      title: 'Проверить документы по закупкам', 
      deadline: '19.11.2025',
      aiTip: 'Загрузите спецификации в модуль "Закупки" для автоматической проверки соответствия 44-ФЗ'
    },
    { 
      id: 3, 
      title: 'Ответить на обращения граждан', 
      deadline: 'Сегодня',
      aiTip: 'Приоритет: тема "Отопление" - 23 новых обращения требуют ответа'
    },
  ]

  const comments = [
    { author: 'Иванов П.', text: 'Когда включат отопление в доме по ул. Ленина 15?', status: 'new' },
    { author: 'Смирнова А.', text: 'Благодарю за быстрый ремонт дороги!', status: 'answered' },
    { author: 'Петров К.', text: 'Необходимо установить детскую площадку во дворе', status: 'in_progress' },
    { author: 'Сидорова М.', text: 'Проблема с вывозом мусора третью неделю', status: 'official' },
    { author: 'Васильев Д.', text: 'Отличная работа по благоустройству парка!', status: 'resolved' },
  ]

  const programs = [
    {
      event: 'Ремонт школьных спортзалов',
      effect: 'Улучшение условий для 1200 учащихся',
      cost: '15.5 млн ₽',
      program: 'Развитие образования 2024-2030'
    },
    {
      event: 'Установка уличного освещения',
      effect: 'Освещение 12 км дорог, снижение ДТП на 25%',
      cost: '8.2 млн ₽',
      program: 'Безопасные дороги 2024-2027'
    },
    {
      event: 'Модернизация поликлиники',
      effect: 'Прием 500+ пациентов в день, новое оборудование',
      cost: '42.0 млн ₽',
      program: 'Здравоохранение 2024-2028'
    },
  ]

  const opinionLeaders = {
    positive: [
      { name: 'Михайлов С.В.', followers: '12.3K', engagement: '+18%' },
      { name: 'Блог "Наш район"', followers: '8.7K', engagement: '+12%' },
    ],
    negative: [
      { name: 'Кузнецов А.П.', followers: '15.1K', engagement: '+24%' },
      { name: 'Группа "Проблемы ЖКХ"', followers: '6.2K', engagement: '+8%' },
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white p-6">
      <div className="max-w-[1800px] mx-auto space-y-6">
        
        <header className="glass rounded-3xl p-6 shadow-lg animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 glass-green rounded-2xl flex items-center justify-center">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  ИИ ПАНЕЛЬ организации общественно-политической работы
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  Ленинский городской округ
                </p>
              </div>
            </div>
            
            <Card className="glass-green border-0 p-4 min-w-[280px]">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    ЗГ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm text-foreground">Иванов Петр Сергеевич</p>
                  <p className="text-xs text-muted-foreground">Заместитель Главы Администрации</p>
                </div>
              </div>
            </Card>
          </div>
        </header>

        <div className="flex gap-3 overflow-x-auto pb-2 animate-slide-up">
          <Button
            variant={activeSection === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveSection('all')}
            className="glass rounded-2xl px-6 whitespace-nowrap"
          >
            <Icon name="LayoutDashboard" size={18} className="mr-2" />
            Все разделы
          </Button>
          {workSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? 'default' : 'outline'}
              onClick={() => setActiveSection(section.id)}
              className="glass rounded-2xl px-6 whitespace-nowrap"
            >
              <Icon name={section.icon} size={18} className="mr-2" />
              {section.label}
            </Button>
          ))}
        </div>

        <Card className="glass border-0 rounded-3xl p-6 shadow-lg animate-slide-up">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Brain" className="text-primary" />
            Модули работы с документами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="glass-green h-24 rounded-2xl flex-col gap-2 hover:scale-105 transition-transform">
              <Icon name="Database" size={24} className="text-primary" />
              <span className="font-semibold">Подключить Базу знаний</span>
            </Button>
            <Button variant="outline" className="glass-yellow h-24 rounded-2xl flex-col gap-2 hover:scale-105 transition-transform">
              <Icon name="Upload" size={24} className="text-secondary" />
              <span className="font-semibold">Загрузить документы</span>
            </Button>
            <Button variant="outline" className="glass-green h-24 rounded-2xl flex-col gap-2 hover:scale-105 transition-transform">
              <Icon name="FileCheck" size={24} className="text-primary" />
              <span className="font-semibold">Отчет по проверке</span>
            </Button>
            <Button variant="outline" className="glass-yellow h-24 rounded-2xl flex-col gap-2 hover:scale-105 transition-transform">
              <Icon name="FilePlus" size={24} className="text-secondary" />
              <span className="font-semibold">Создать по шаблону</span>
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass border-0 rounded-3xl p-6 shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Cloud" className="text-primary" />
              Облако обращений граждан
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 min-h-[280px] p-4">
              {citizenTopics.map((topic, index) => (
                <span
                  key={index}
                  className={`${topic.size} ${topic.weight} text-primary/80 hover:text-primary cursor-pointer transition-all hover:scale-110`}
                  style={{ 
                    lineHeight: '1.2',
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  {topic.word}
                </span>
              ))}
            </div>
          </Card>

          <Card className="glass border-0 rounded-3xl p-6 shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="ClipboardList" className="text-secondary" />
              Поручения главы
            </h2>
            <div className="space-y-3">
              {tasks.map((task) => (
                <Card key={task.id} className="glass-yellow border-0 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{task.title}</h3>
                    <Badge variant="outline" className="text-xs bg-white/50">
                      {task.deadline}
                    </Badge>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground bg-white/30 rounded-lg p-2">
                    <Icon name="Lightbulb" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                    <p>{task.aiTip}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        <Card className="glass border-0 rounded-3xl p-6 shadow-lg animate-slide-up overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Icon name="Radio" className="text-primary" />
              ИИ Мониторинг
            </h2>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">23</div>
                <div className="text-xs text-muted-foreground">Новых</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">45</div>
                <div className="text-xs text-muted-foreground">Отвечено</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">12</div>
                <div className="text-xs text-muted-foreground">В работе</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">31</div>
                <div className="text-xs text-muted-foreground">Решено</div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden bg-white/30 rounded-2xl p-4 mb-4">
            <div className="flex gap-6 animate-marquee">
              {[...comments, ...comments].map((comment, index) => (
                <div key={index} className="flex-shrink-0 glass rounded-xl p-3 min-w-[320px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{comment.author}</span>
                    <Badge 
                      variant={comment.status === 'new' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {comment.status === 'new' ? 'Новое' : 
                       comment.status === 'answered' ? 'Отвечено' :
                       comment.status === 'in_progress' ? 'В работе' :
                       comment.status === 'official' ? 'Запрос' : 'Решено'}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-green rounded-2xl p-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Icon name="ThumbsUp" size={16} className="text-green-600" />
                Позитивные ЛОМ
              </h3>
              {opinionLeaders.positive.map((leader, index) => (
                <div key={index} className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium">{leader.name}</span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">{leader.followers}</Badge>
                    <Badge className="text-xs bg-green-100 text-green-700">{leader.engagement}</Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-yellow rounded-2xl p-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600" />
                Негативные ЛОМ
              </h3>
              {opinionLeaders.negative.map((leader, index) => (
                <div key={index} className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium">{leader.name}</span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">{leader.followers}</Badge>
                    <Badge className="text-xs bg-orange-100 text-orange-700">{leader.engagement}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="glass border-0 rounded-3xl p-6 shadow-lg animate-fade-in">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Target" className="text-primary" />
            Связь мероприятий Администрации с Госпрограммами
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-semibold text-sm">Мероприятие</th>
                  <th className="text-left p-3 font-semibold text-sm">Эффект</th>
                  <th className="text-left p-3 font-semibold text-sm">Расходы</th>
                  <th className="text-left p-3 font-semibold text-sm">Госпрограмма</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((prog, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-white/30 transition-colors">
                    <td className="p-3 text-sm font-medium">{prog.event}</td>
                    <td className="p-3 text-sm text-muted-foreground">{prog.effect}</td>
                    <td className="p-3 text-sm font-semibold text-primary">{prog.cost}</td>
                    <td className="p-3 text-sm">
                      <Badge variant="outline" className="bg-white/50">{prog.program}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

      </div>
    </div>
  )
};

export default Index;