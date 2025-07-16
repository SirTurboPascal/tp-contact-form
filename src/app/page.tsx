import Card from '@/components/Card.component';
import CardTitle from '@/components/CardTitle.compontent';
import ContactForm from '@/components/ContactForm.component';
import Typography from '@/components/Typography.variant';

const Page = () => {
	return (
		<div className='flex grow flex-col items-center justify-center'>
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
