import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 定義公告的資料格式
interface Notice {
  id: number;
  date: string;
  category: string;
  title: string;
  isImportant: boolean;
  pdfUrl: string;
}

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.html',
  styleUrls: ['./notices.css']
})
export class NoticesComponent {
  // 建立假資料 (未來這裡可以改成從 Firebase 讀取)
  notices: Notice[] = [
    {
      id: 1,
      date: '2026-04-12',
      category: '會議紀錄',
      title: '115年度四月份管委會例行會議紀錄',
      isImportant: true,
      pdfUrl: '/pdfs/20260412.pdf'
    },

      {
      id: 2,
      date: '2026-04-15',
      category: '公告',
      title: '115物業召標資訊',
      isImportant: true,
      pdfUrl: '/pdfs/20260415bid.pdf'
    },
    {
      id: 3,
      date: '2026-04-16',
      category: '公告',
      title: '閣美學A5戶裝修案，結構技師回函',
      isImportant: true,
      pdfUrl: '/pdfs/20260416.pdf'
    },

  ];
}
