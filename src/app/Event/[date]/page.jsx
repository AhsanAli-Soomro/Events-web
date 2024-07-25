import EventForm from '@/components/EventForm';

export default function EventFormPage({ params }) {
  const { date } = params;
  return (
    <div className="container mx-auto p-4">
      <EventForm date={date} />
    </div>
  );
}
