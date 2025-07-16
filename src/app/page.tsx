import Card from '@/components/Card.component';
import CardTitle from '@/components/CardTitle.compontent';
import ContactForm from '@/components/ContactForm.component';
import Typography from '@/components/Typography.variant';

const Page = () => {
	return (
		<div className='flex grow flex-col items-center gap-4 overflow-y-auto py-[32px]'>
			<Card>
				<CardTitle>
					<Typography variant='card-title'>Contact Us</Typography>
				</CardTitle>

				<ContactForm />
			</Card>
		</div>
	);
};

export default Page;
