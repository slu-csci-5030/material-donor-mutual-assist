import PDFDocument from 'pdfkit';
import getStream from 'get-stream';
//import { DonatedItem } from "../modals/donatedItem"; // adjust if your type path is different

export async function generatePDF(item: any): Promise<Buffer> {
    const doc = new PDFDocument({ margin: 50 });

    doc.fontSize(20).text('Certificate of Appreciation', { align: 'center' });
    doc.moveDown();

    doc.fontSize(14).text(`This certificate is awarded to:`);
    doc.moveDown(0.5);
    doc.fontSize(16).text(`${item.donor?.firstName ?? 'Donor Name'}`);
    doc.moveDown();

    doc.fontSize(14).text(`For generously donating: ${item.itemType}`);
    doc.text(`On: ${new Date(item.dateDonated).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric')}`);
    doc.moveDown();
    doc.opacity(1);
    const watermarkPath = path.join(__dirname, '../assets/images/bworks-logo.png');
        if (fs.existsSync(watermarkPath)) {
            doc.opacity(0.1);
            doc.image(watermarkPath, 150, 200, { width: 300, align: 'center' });
            doc.text('We sincerely thank you for your contribution and support.', {
            align: 'left',
        });
    const logoPath = path.join(__dirname, '../assets/images/bworks-logo.png');Add commentMore actions
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, doc.page.width / 2 - 75, 10, { width: 150 });

    doc.moveDown(4);
    doc.text('Sincerely,');
    doc.text('St. Louis BWorks Team');

    return new Promise<Buffer>((resolve, reject) => {
        const buffers: Buffer[] = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));
        doc.on('error', reject);
        doc.end();
    });
}
