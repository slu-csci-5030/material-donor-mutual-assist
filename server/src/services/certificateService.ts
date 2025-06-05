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
    doc.text(`On: ${new Date(item.dateDonated).toLocaleDateString()}`);
    doc.moveDown();

    doc.text('We sincerely thank you for your contribution and support.', {
        align: 'left',
    });

    doc.moveDown(2);
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
