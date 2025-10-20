type PageCardProps = {
  title: string;
  content: string;
};

export default function PageCard({ title, content }: PageCardProps) {
  return (
    <div className='bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow hover:shadow-lg transition text-left'>
      <h3 className='text-xl font-semibold text-blue-700 mb-3'>{title}</h3>
      <p className='text-gray-600'>{content}</p>
    </div>
  );
}
