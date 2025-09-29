const [submitStatus, setSubmitStatus] = React.useState<string>(''); // Add this at the top of your component

{submitStatus === 'success' && (
    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-700">Message sent successfully! Your message has been sent successfully! We’ll get back to you soon.</p>
    </div>
)}