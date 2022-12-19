import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${
      theme.palette.primary.dark
    } 80%)`,
  },
  divider: {
    backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  seller: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    marginRight: -88,
    paddingRight: 66,
    width: 480,
  },
}));

function CompactInvoicePage() {
  const classes = useStyles();
  const [invoice, setInvoice] = useState(null);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    axios
      .get('/api/invoices/get-invoice', {
        params: { id: '5725a6802d' },
      })
      .then((res) => {
        setInvoice(res.data);
      });
  }, []);

  return (
    <div
      className={clsx(classes.root, 'flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto')}
    >
      {invoice && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounceDamping: 0 }}
        >
          <Card className="mx-auto w-xl print:w-full print:p-8 print:shadow-none rounded-none sm:rounded-20">
            <CardContent className="p-88 print:p-0">
              <Typography color="textSecondary" className="mb-32">
                {invoice.date}
              </Typography>

              <div className="flex justify-between">
                <div>
                  <table className="mb-16">
                    <tbody>
                      <tr>
                        <td className="pb-4">
                          <Typography className="font-light" variant="h6" color="textSecondary">
                            INVOICE
                          </Typography>
                        </td>
                        <td className="pb-4 px-16">
                          <Typography className="font-light" variant="h6">
                            {invoice.number}
                          </Typography>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Typography color="textSecondary">INVOICE DATE</Typography>
                        </td>
                        <td className="px-16">
                          <Typography>{invoice.date}</Typography>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Typography color="textSecondary">DUE DATE</Typography>
                        </td>
                        <td className="px-16">
                          <Typography>{invoice.dueDate}</Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Typography color="textSecondary">{invoice.client.title}</Typography>

                  {invoice.client.address && (
                    <Typography color="textSecondary">{invoice.client.address}</Typography>
                  )}
                  {invoice.client.phone && (
                    <Typography color="textSecondary">{invoice.client.phone}</Typography>
                  )}
                  {invoice.client.email && (
                    <Typography color="textSecondary">{invoice.client.email}</Typography>
                  )}
                  {invoice.client.website && (
                    <Typography color="textSecondary">{invoice.client.website}</Typography>
                  )}
                </div>

                <div className={clsx(classes.seller, 'flex items-center p-16')}>
                  <img className="w-80" src="assets/images/logos/fuse.svg" alt="logo" />

                  <div className={clsx(classes.divider, 'w-px mx-8 h-96 opacity-50')} />

                  <div className="px-8">
                    <Typography color="inherit">{invoice.from.title}</Typography>

                    {invoice.from.address && (
                      <Typography color="inherit">{invoice.from.address}</Typography>
                    )}
                    {invoice.from.phone && (
                      <Typography color="inherit">{invoice.from.phone}</Typography>
                    )}
                    {invoice.from.email && (
                      <Typography color="inherit">{invoice.from.email}</Typography>
                    )}
                    {invoice.from.website && (
                      <Typography color="inherit">{invoice.from.website}</Typography>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-64">
                <Table className="simple">
                  <TableHead>
                    <TableRow>
                      <TableCell>SERVICE</TableCell>
                      <TableCell>UNIT</TableCell>
                      <TableCell align="right">UNIT PRICE</TableCell>
                      <TableCell align="right">QUANTITY</TableCell>
                      <TableCell align="right">TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoice.services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell>
                          <Typography variant="subtitle1">{service.title}</Typography>
                        </TableCell>
                        <TableCell>{service.unit}</TableCell>
                        <TableCell align="right">{formatter.format(service.unitPrice)}</TableCell>
                        <TableCell align="right">{service.quantity}</TableCell>
                        <TableCell align="right">{formatter.format(service.total)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <Table className="simple mt-32">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          SUBTOTAL
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {formatter.format(invoice.subtotal)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          TAX
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {formatter.format(invoice.tax)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          DISCOUNT
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          className="font-normal"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {formatter.format(invoice.discount)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography className="font-light" variant="h4" color="textSecondary">
                          TOTAL
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography className="font-light" variant="h4" color="textSecondary">
                          {formatter.format(invoice.total)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-96">
                <Typography className="mb-24 print:mb-12" variant="body1">
                  Please pay within 15 days. Thank you for your business.
                </Typography>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="w-32" src="assets/images/logos/fuse.svg" alt="logo" />
                  </div>

                  <Typography
                    className="font-normal mb-64 px-24"
                    variant="caption"
                    color="textSecondary"
                  >
                    In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac
                    congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet
                    facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus
                    dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit
                    amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt
                    lacinia et eget eros.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default CompactInvoicePage;

/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 * */
